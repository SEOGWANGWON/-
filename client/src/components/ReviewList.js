import React, { useState, useEffect } from "react";
import "../css/DetailsPage.css";
import axios from "axios";

function ReviewList() {
  const urlParams = new URLSearchParams(window.location.search);
  const selectedId = urlParams.get("id");
  console.log(selectedId);

  const [review, setReview] = useState([]);

  useEffect(() => {
    const handleReview = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8282/review/detailReview`,
          {
            params: {
              pensionsId: selectedId,
            },
          }
        );
        console.log(res.data);
        setReview(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    handleReview();
    console.log(review);
  }, []);

  useEffect(() => {
    console.log(review);
  }, [review]);

  return (
    <div>
      {review.map((reviews) => (
        <div key={reviews.id}>
          <div>{reviews.reviewText}</div>
        </div>
      ))}
    </div>
  );
}

export default ReviewList;
