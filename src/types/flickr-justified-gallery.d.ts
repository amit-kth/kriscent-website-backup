declare module 'flickr-justified-gallery' {
    export default function fjGallery(
        elements: NodeListOf<Element> | Element[],
        options?: {
            itemSelector?: string;
            rowHeight?: number;
            lastRow?: string;
            gutter?: number;
            rowHeightTolerance?: number;
            calculateItemsHeight?: boolean;
        }
    ): void;
} 