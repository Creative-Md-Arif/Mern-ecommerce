import jwt from "jsonwebtoken";

const adminAuth = (req, res, next) => {
  try {
    const{ token} = req.headers;

    if (!token) {
      return res.json({ success: false, message: "Please Login First" });
    }

    const decode_token = jwt.verify(token, process.env.JWT_SECRET);
    const {isAdmin} = decode_token;
   
    

    if (!isAdmin) {
      return res.json({ success: false, message: "Please Login First" });
    }

    next();
  } catch (error) {
    console.log(" Admin Auth Error  ", error);
    res.json({ success: false, message: error?.message });
  }
};


export default adminAuth