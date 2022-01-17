export const getSavedTrailIds = () => {
  const savedTrailIds = localStorage.getItem("saved_trails")
    ? JSON.parse(localStorage.getItem("saved_trails"))
    : [];

  return savedTrailIds;
};

export const saveTrailIds = (trailIdArr) => {
  if (trailIdArr.length) {
    localStorage.setItem("saved_trails", JSON.stringify(trailIdArr));
  } else {
    localStorage.removeItem("saved_trails");
  }
};

export const removeTrailId = (trailId) => {
  const savedTrailIds = localStorage.getItem("saved_trails")
    ? JSON.parse(localStorage.getItem("saved_trails"))
    : null;

  if (!savedTrailIds) {
    return false;
  }

  const updatedSavedTrailIds = savedTrailIds?.filter(
    (savedTrailId) => savedTrailId !== trailId
  );
  localStorage.setItem("saved_trails", JSON.stringify(updatedSavedTrailIds));

  return true;
};
