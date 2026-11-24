"use client";

import React, {
  useEffect,
  useState,
  useCallback,
  useMemo,
  useRef,
} from "react";
import OurCultureHeroSection from "./components/our-culture-hero-section";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MemoryCollage } from "./components/memory-collage";
import Skeleton from "../Components/skeleton";
import { SEO } from "@/lib/seo";
import { API_ENDPOINT, metadata } from "@/lib/variables";
import { Spinner } from "@/components/ui/spinner";
import { toast } from "sonner";
import TeamMessageSection from "./components/team-message-section";
import { ChevronLeft, ChevronRight } from "lucide-react";

/* ─── Types ─── */

interface YearItem {
  id: number;
  year: string;
}

interface YearResponse {
  recordlist: YearItem[];
  status: number;
}

export interface CategoryItem {
  id: number;
  name: string;
}

export interface CategoryResponse {
  recordlist: CategoryItem[];
  status: number;
}

export interface RecordList {
  id: number;
  year_Id: number;
  category_Id: number;
  subcategory_id: number;
  title: string | null;
  subcategory: string;
  images: ImageObjectType[];
}

export interface ImageObjectType {
  picture: string;
}

interface GalleryResponse {
  recordlist: KeyValue;
  status: number;
}

export interface KeyValue {
  [key: string]: RecordList[];
}

/* ─── Shared fetch-with-retry helper ─── */

async function fetchWithRetry<T>(
  url: string,
  options: RequestInit & { retries?: number } = {},
): Promise<T> {
  const { retries = 3, ...fetchOptions } = options;
  let lastError: unknown;

  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      const response = await fetch(url, fetchOptions);
      if (response.ok) return (await response.json()) as T;
      if (response.status === 400) {
        throw Object.assign(new Error("Bad Request"), { status: 400 });
      }
      if (attempt < retries) {
        await new Promise((r) => setTimeout(r, 1000));
        continue;
      }
      throw new Error(`HTTP ${response.status}`);
    } catch (err: unknown) {
      lastError = err;
      if ((err as { status?: number })?.status === 400) throw err;
      if ((err as Error)?.name === "AbortError") throw err;
      if (attempt < retries) {
        await new Promise((r) => setTimeout(r, 1000));
      }
    }
  }
  throw lastError;
}

/* ─── Component ─── */

export default function OurCulturePage() {
  const [years, setYears] = useState<YearItem[]>([]);
  const [categories, setCategories] = useState<CategoryItem[]>([]);
  const [selectedYearId, setSelectedYearId] = useState<string>("");
  const [allImages, setAllImages] = useState<KeyValue>();
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>("");
  const [isLoadingYears, setIsLoadingYears] = useState(true);
  const [fetchedImages, setFetchedImages] = useState<Record<number, KeyValue>>(
    {},
  );
  const [imagesNotFound, setImagesNotFound] = useState(false);

  const fetchGalleryData = useCallback(
    async (yearId: number, signal?: AbortSignal) => {
      if (fetchedImages[yearId]) {
        setImagesNotFound(false);
        setAllImages(fetchedImages[yearId]);
        setIsLoading(false);
        return;
      }

      setIsLoading(true);
      try {
        const data = await fetchWithRetry<GalleryResponse>(
          `${API_ENDPOINT}/gallery`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ yearId }),
            signal,
          },
        );
        setAllImages(data.recordlist);
        setImagesNotFound(false);
        setFetchedImages((prev) => ({ ...prev, [yearId]: data.recordlist }));
      } catch (err: unknown) {
        if ((err as { status?: number })?.status === 400) {
          setImagesNotFound(true);
        } else if ((err as Error)?.name !== "AbortError") {
          toast.error("Error Fetching Images");
        }
      } finally {
        setIsLoading(false);
      }
    },
    [fetchedImages],
  );

  useEffect(() => {
    let cancelled = false;

    const loadYears = async () => {
      setIsLoadingYears(true);
      try {
        const data = await fetchWithRetry<YearResponse>(`${API_ENDPOINT}/year`);
        if (cancelled || data.recordlist.length === 0) return;

        setYears(data.recordlist);

        const currentYear = new Date().getFullYear().toString();
        const match = data.recordlist.find((y) => y.year === currentYear);
        setSelectedYearId(String((match ?? data.recordlist[0]).id));
      } catch {
        if (!cancelled) toast.error("Failed to fetch data");
      } finally {
        if (!cancelled) setIsLoadingYears(false);
      }
    };

    if (years.length === 0) loadYears();
    return () => {
      cancelled = true;
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    let cancelled = false;

    const loadCategories = async () => {
      try {
        const data = await fetchWithRetry<CategoryResponse>(
          `${API_ENDPOINT}/category`,
        );
        if (!cancelled) setCategories(data.recordlist);
      } catch {
        if (!cancelled) toast.error("Failed to fetch categories");
      }
    };

    if (categories.length === 0) loadCategories();
    return () => {
      cancelled = true;
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (!selectedYearId) return;
    const controller = new AbortController();
    fetchGalleryData(parseInt(selectedYearId, 10), controller.signal);
    return () => controller.abort();
  }, [selectedYearId, fetchGalleryData]);

  const sortedCategories = useMemo(
    () => [...categories].sort((a, b) => a.name.localeCompare(b.name)),
    [categories],
  );

  const parsedYearId = useMemo(
    () => parseInt(selectedYearId, 10),
    [selectedYearId],
  );
  const parsedCategoryId = useMemo(
    () => (selectedCategoryId ? parseInt(selectedCategoryId, 10) : null),
    [selectedCategoryId],
  );

  return (
    <SEO metadata={metadata.ourCulturePage}>
      <main className="overflow-x-hidden">
        <div className="flex flex-col">
          <OurCultureHeroSection />

          {/* ─── Year selector ─── */}
          <div className="w-full flex flex-col items-center translate-y-[-60px] px-4 z-10">
            {isLoadingYears ? (
              <div className="flex items-center justify-center h-28 w-full max-w-xl rounded-2xl bg-white border border-gray-100 shadow-lg">
                <Spinner className="text-gray-300" />
              </div>
            ) : (
              <CustomYearTabs
                years={years}
                selectedTab={parsedYearId}
                onTabChange={setSelectedYearId}
              />
            )}
          </div>

          {/* ─── Category filter chips ─── */}
          <div className="container">
            <Tabs
              defaultValue="all"
              className="md:my-3 my-1"
              onValueChange={setSelectedCategoryId}
            >
              <TabsList
                className="
                  flex flex-wrap h-auto gap-2 bg-transparent px-1 py-2
                  md:rounded-full rounded-xl justify-start
                "
              >
                <TabsTrigger
                  value="all"
                  className="
                    rounded-full px-4 py-1.5 text-sm font-medium
                    bg-primary/5 text-gray-700 border border-primary/10
                    hover:bg-primary/10 hover:border-primary/20
                    data-[state=active]:bg-primary data-[state=active]:text-white
                    data-[state=active]:border-primary data-[state=active]:shadow-[0_6px_20px_-8px] data-[state=active]:shadow-primary/60
                    transition-all duration-300
                  "
                >
                  All
                </TabsTrigger>
                {sortedCategories.map((cat) => (
                  <TabsTrigger
                    key={cat.id}
                    value={String(cat.id)}
                    className="
                      rounded-full px-4 py-1.5 text-sm font-medium
                      bg-primary/5 text-gray-700 border border-primary/10
                      hover:bg-primary/10 hover:border-primary/20
                      data-[state=active]:bg-primary data-[state=active]:text-white
                      data-[state=active]:border-primary data-[state=active]:shadow-[0_6px_20px_-8px] data-[state=active]:shadow-primary/60
                      transition-all duration-300
                    "
                  >
                    {cat.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>

          {/* ─── Gallery ─── */}
          <div className="container flex flex-col gap-5">
            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[0, 1].map((i) => (
                  <div
                    key={i}
                    className="space-y-4 rounded-2xl bg-white/60 backdrop-blur-sm p-4 border border-gray-100 shadow-sm"
                  >
                    <Skeleton className="h-[300px] w-full rounded-xl" />
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-[60%]" />
                      <Skeleton className="h-4 w-[40%]" />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <MemoryCollage
                imageUrls={allImages || {}}
                imagesNotFound={imagesNotFound}
                categoryID={parsedCategoryId}
                yearID={parsedYearId}
                categories={categories}
              />
            )}
            <div className="h-20" />
          </div>
        </div>
        <TeamMessageSection />
      </main>
    </SEO>
  );
}

/* ─── Year tabs — LARGE prominent cards, scrollable, latest on left ─── */

interface CustomYearTabsProps {
  selectedTab: number;
  onTabChange: (id: string) => void;
  years: YearItem[];
}

const CustomYearTabs: React.FC<CustomYearTabsProps> = ({
  selectedTab,
  onTabChange,
  years,
}) => {
  // Latest year on the LEFT
  const sortedYears = useMemo(
    () =>
      [...years].sort((a, b) => parseInt(b.year, 10) - parseInt(a.year, 10)),
    [years],
  );

  const scrollerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateScrollState = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 2);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 2);
  }, []);

  useEffect(() => {
    updateScrollState();
    const el = scrollerRef.current;
    if (!el) return;

    el.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);
    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [updateScrollState, sortedYears.length]);

  // Keep active year visible
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const active = el.querySelector<HTMLButtonElement>(
      `[data-year-id="${selectedTab}"]`,
    );
    if (active) {
      active.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [selectedTab]);

  const scrollBy = (dir: "left" | "right") => {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = Math.max(el.clientWidth * 0.55, 160);
    el.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Outer shell */}
      <div
        className="
          relative flex items-center gap-2 md:gap-3
          rounded-3xl bg-white
          border border-gray-100
          shadow-[0_25px_60px_-20px_rgba(0,0,0,0.18),0_10px_25px_-12px_rgba(0,0,0,0.1)]
          px-2 py-3 md:px-3 md:py-4
        "
      >
        {/* Soft top ambient light */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-8 top-0 h-12 rounded-full bg-primary/10 blur-2xl"
        />

        {/* LEFT ARROW */}
        <button
          type="button"
          onClick={() => scrollBy("left")}
          disabled={!canScrollLeft}
          aria-label="Previous years"
          className={`
            relative z-10 shrink-0
            flex items-center justify-center
            h-11 w-11 md:h-12 md:w-12
            rounded-2xl border transition-all duration-300
            focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40
            ${
              canScrollLeft
                ? "bg-white border-gray-200 text-gray-700 hover:bg-primary hover:text-white hover:border-primary hover:shadow-[0_10px_25px_-8px] hover:shadow-primary/40 cursor-pointer"
                : "bg-gray-50 border-gray-100 text-gray-300 cursor-not-allowed"
            }
          `}
        >
          <ChevronLeft size={22} strokeWidth={2.5} />
        </button>

        {/* SCROLL TRACK */}
        <div className="relative flex-1 min-w-0 overflow-hidden">
          {/* Edge fades — only when scrollable */}
          <div
            aria-hidden="true"
            className={`
              pointer-events-none absolute left-0 top-0 bottom-0 w-10 z-10
              bg-gradient-to-r from-white to-transparent
              transition-opacity duration-300
              ${canScrollLeft ? "opacity-100" : "opacity-0"}
            `}
          />
          <div
            aria-hidden="true"
            className={`
              pointer-events-none absolute right-0 top-0 bottom-0 w-10 z-10
              bg-gradient-to-l from-white to-transparent
              transition-opacity duration-300
              ${canScrollRight ? "opacity-100" : "opacity-0"}
            `}
          />

          <div
            ref={scrollerRef}
            className="
              flex items-center gap-3 md:gap-4
              overflow-x-auto scroll-smooth
              px-1 py-1
              [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden
            "
          >
            {sortedYears.map((year) => {
              const isActive = selectedTab === year.id;

              return (
                <button
                  key={year.id}
                  type="button"
                  data-year-id={year.id}
                  onClick={() => onTabChange(String(year.id))}
                  aria-pressed={isActive}
                  className={`
                    group relative shrink-0
                    flex flex-col items-center justify-center
                    w-[72px] h-[72px] md:w-24 md:h-24
                    rounded-2xl cursor-pointer
                    transition-all duration-300 ease-out
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2
                    ${
                      isActive
                        ? "bg-primary text-white -translate-y-1 scale-[1.04] shadow-[0_18px_40px_-12px] shadow-primary/55"
                        : "bg-[#f4f4f5] text-gray-500 border border-gray-200/80 hover:bg-white hover:border-primary/35 hover:text-primary hover:-translate-y-0.5 hover:shadow-lg"
                    }
                  `}
                >
                  {/* Active sheen */}
                  {isActive && (
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b from-white/25 via-transparent to-black/10"
                    />
                  )}

                  {/* Year label — large & bold so it reads as important */}
                  <span
                    className={`
                      relative font-black tracking-tight leading-none
                      text-lg md:text-2xl
                      ${isActive ? "text-white" : "text-inherit"}
                    `}
                  >
                    {year.year}
                  </span>

                  {/* Active bar under the number */}
                  <span
                    aria-hidden="true"
                    className={`
                      relative mt-2 h-1 rounded-full transition-all duration-300
                      ${isActive ? "w-8 bg-white/90" : "w-0 bg-transparent"}
                    `}
                  />
                </button>
              );
            })}
          </div>
        </div>

        {/* RIGHT ARROW */}
        <button
          type="button"
          onClick={() => scrollBy("right")}
          disabled={!canScrollRight}
          aria-label="Next years"
          className={`
            relative z-10 shrink-0
            flex items-center justify-center
            h-11 w-11 md:h-12 md:w-12
            rounded-2xl border transition-all duration-300
            focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40
            ${
              canScrollRight
                ? "bg-white border-gray-200 text-gray-700 hover:bg-primary hover:text-white hover:border-primary hover:shadow-[0_10px_25px_-8px] hover:shadow-primary/40 cursor-pointer"
                : "bg-gray-50 border-gray-100 text-gray-300 cursor-not-allowed"
            }
          `}
        >
          <ChevronRight size={22} strokeWidth={2.5} />
        </button>
      </div>
    </div>
  );
};
