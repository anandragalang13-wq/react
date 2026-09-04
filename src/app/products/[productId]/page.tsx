//src/app/products/[productId]/page.tsx
export default function ProductDetails({ params }: { params: { productId: string } }) {
    return (
        <main>
            <h1>Product Details</h1>
            <p>Product ID: {params.productId}</p>
        </main>
    );
}