import React from 'react';
import PacmanLoader from "react-spinners/PacmanLoader";

export const Loading = (loading) => {
  return (
    <div className="loading-container">
      <PacmanLoader
        color="#FCCA01"
        loading={loading}
        // cssOverride={override}
        size={25}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};
 