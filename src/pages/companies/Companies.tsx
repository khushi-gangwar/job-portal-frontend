import Navbar from '@/components/common/Navbar/Navbar'
import { useCompaniesQuery } from '@/store/service/companyApi'
import { Company } from '@/libs/interfaces/companies-interface'
import React from 'react'

const Companies = () => {
    const { data, isLoading, isError, error } = useCompaniesQuery();

    if (isLoading) return <p>Loading companies...</p>;

    if (isError) {
        console.error("Error fetching companies:", error);
        return <p>Error loading companies. Please try again later.</p>;
    }

    const companies: Company[] = data?.data ?? [];

    if (!Array.isArray(companies)) {
        console.error("Unexpected API response format:", data);
        return <p>Unexpected response format. Please contact support.</p>;
    }

    return (
        <div>
            <Navbar />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                {companies.map((com) => (
                    <div
                        key={com.id}
                        className="p-4 border border-gray-300 rounded-lg shadow-sm hover:shadow-md transition"
                    >
                        <h2 className="text-xl font-semibold mb-2">{com.name}</h2>
                        <p className="text-gray-600 mb-1">Founded: {com.founded}</p>
                        <p className="text-gray-600 mb-1">Location: {com.location}</p>
                        <p className="text-gray-600 mb-1">Description: {com.description}</p>
                        <p className="text-gray-600 mb-1">Industry: {com.industry}</p>
                        <p className="text-gray-600 mb-1">Type: {com.type}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Companies;
