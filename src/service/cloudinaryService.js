import axios from "axios";

export const uploadInvoiceThumbnail = async (imageData) => {
    const formData = new FormData();
    formData.append("file", imageData);
    formData.append("upload_preset", "test_sushant"); // Use your unsigned preset
    formData.append("cloud_name", "da7gmgfgp");

    const res = await axios.post(
        `https://api.cloudinary.com/v1_1/da7gmgfgp/image/upload`,
        formData
    );

    return res.data.secure_url;
};
