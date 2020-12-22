const defaultInternalError = (err: any, req: any, res: any, next: any) => {
  res.setStatus(500);
  res.json({ message: "Internal Server Error", error: err.message });
};

const defaultNotFound = (req: any, res: any, next: any) => {
  res.setStatus(404);
  res.json({ message: "Not found" });

  next();
};

export default {
  default: defaultInternalError,
  notFound: defaultNotFound,
};
