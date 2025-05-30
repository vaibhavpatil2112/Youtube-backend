import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema(
  {
    videoFile : {
        type: String,
        required: true
    },
      thumbnails : {
        type: String,
        required: true
    },
      title : {
        type: String,
        required: true
    },
      descprition : {
        type: String,
        required: true
    }, 
     time : {
        type: Number,
        required: true
    },
      views : {
        type: Number,
        default:0
    },
    ispublished: {
        type : Boolean,
        default:true
    },
    owner : {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
  },

  {
    timestamps: true,
  }
);

export const Video = mongoose.model("Video", videoSchema);
