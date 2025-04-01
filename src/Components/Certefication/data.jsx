// First import your images at the top of the file
import awsImage from "../../assets/aws.jpg";
import kurazImage from "../../assets/kuraz.jpg";

// Then use them in your certificates array
export const certificates = [
  {
    id: 1,
    title: "AWS Certified Cloud Practitioner",
    image: awsImage,
    description: "Earned AWS Cloud Practitioner certification, demonstrating knowledge of cloud fundamentals and best practices.",
  },
  {
    id: 2,
    title: "Kuraz internship accomplishment certificate",
    image: kurazImage,
    description: "This certification was awarded upon the successful completion of my summer internship at Kuraz, where I worked as a Backend Developer.",
  },
];