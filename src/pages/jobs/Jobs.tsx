import Navbar from "@/components/common/Navbar/Navbar";
import { Job } from "@/libs/interfaces/job-interface";
import { useJobsQuery } from "@/store/service/jobsApi";


const Jobs = () => {
  const { data, isLoading } = useJobsQuery();

  if (isLoading) return <p>Loading...</p>;
  const jobs: Job[] = data?.data ?? [];
console.log("Jobs data:", jobs);
 // Debugging line
 if (jobs.length === 0) return <p>No jobs available</p>;

  return ( 
    <div>
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {jobs.map((job: Job) => (
          <div
            key={job.id}
            className="p-4 border border-gray-300 rounded-lg shadow-sm hover:shadow-md transition"
          >
            <h2 className="text-xl font-semibold mb-2">{job.title}</h2>
            <p className="text-gray-600 mb-1">Company: {job.company}</p>
            <p className="text-gray-600 mb-1">Location: {job.location}</p>
            <p className="text-gray-600 mb-1">Experience: {job.expeirencedRequired}</p>
            <p className="text-gray-600 mb-1">Salary: {job.salary}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Jobs;
