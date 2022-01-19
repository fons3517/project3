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

export const getCompletedtrailIds = () => {
  const completedtrailIds = localStorage.getItem("completed_hikes")
    ? JSON.parse(localStorage.getItem("completed_hikes"))
    : [];

  return completedtrailIds;
};

export const completetrailIds = (trailIdArr) => {
  if (trailIdArr.length) {
    localStorage.setItem("completed_hikes", JSON.stringify(trailIdArr));
  } else {
    localStorage.removeItem("completed_hikes");
  }
};

export const removeHikeId = (trailId) => {
  const savedtrailIds = localStorage.getItem("completed_hikes")
    ? JSON.parse(localStorage.getItem("completed_hikes"))
    : null;

  if (!savedtrailIds) {
    return false;
  }

  const updatedSavedtrailIds = savedtrailIds?.filter(
    (savedtrailId) => savedtrailId !== trailId
  );
  localStorage.setItem("completed_hikes", JSON.stringify(updatedSavedtrailIds));

  return true;
};