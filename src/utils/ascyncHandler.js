//
const asynsHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};

// TRY catch
// export { asynsHandler };

// const asynsHandler = (fn) => {
//   async (req, res, next) => {
//     try {
//       await fn(req, res, next);
//     } catch (error) {
//       res.state(err.code || 500).json({
//         success: false,
//         message: err.message,
//       });
//     }
//   };
// };
