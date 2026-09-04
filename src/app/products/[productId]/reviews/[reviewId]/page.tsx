// src/app/products/[productId]/reviews/[reviewId]/page.tsx
type Props = {
  params: {
    productId: string;
    reviewId: string;
  };
};

export default function ReviewDetails({ params }: Props) {
  return (
    <div>
        <h1>Detail about Review</h1>
        <h3>Product {params.productId}</h3>
        <h3>Review {params.reviewId}</h3>
    </div>
  );
}