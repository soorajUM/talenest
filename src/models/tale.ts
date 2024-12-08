import mongoose from "mongoose";

const TaleSchema = new mongoose.Schema(
    {
        title: String,
        content: [String],
        tags: [String],
        slug: String
    },
    {
        timestamps: true,
    }
);

export default mongoose.models.Tale || mongoose.model("Tale", TaleSchema);