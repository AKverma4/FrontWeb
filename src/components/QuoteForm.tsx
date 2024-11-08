import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiUser, FiMail, FiPhone, FiBriefcase, FiTruck, FiCalendar, FiMapPin, FiMessageSquare, FiCheck } from 'react-icons/fi';
import { BiRupee } from 'react-icons/bi';

interface FormData {
    name: string;
    email: string;
    phone: string;
    company: string;
    equipment: string;
    duration: string;
    projectLocation: string;
    startDate: string;
    budget: string;
    message: string;
}

interface FormErrors {
    name?: string;
    email?: string;
    phone?: string;
    equipment?: string;
    duration?: string;
}

const QuoteForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        company: '',
        equipment: '',
        duration: '',
        projectLocation: '',
        startDate: '',
        budget: '',
        message: ''
    });

    const [] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const equipmentOptions = [
        'Excavator',
        'Bulldozer',
        'Crane',
        'Loader',
        'Forklift',
        'Generator',
        'Concrete Mixer',
        'Other'
    ];

    const durationOptions = [
        '1-7 days',
        '8-30 days',
        '1-3 months',
        '3-6 months',
        '6+ months'
    ];

    const budgetRanges = [
        'Under ₹50,000',
        '₹50,000 - ₹1,00,000',
        '₹1,00,000 - ₹5,00,000',
        '₹5,00,000 - ₹10,00,000',
        'Above ₹10,00,000'
    ];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Add your form submission logic here

        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 2000));
            setSubmitStatus('success');
        } catch (error) {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const formSections = [
        {
            title: "Personal Information",
            description: "Please provide your contact details",
            fields: [
                { name: "name", label: "Full Name", icon: <FiUser />, type: "text", required: true },
                { name: "email", label: "Email Address", icon: <FiMail />, type: "email", required: true },
                { name: "phone", label: "Phone Number", icon: <FiPhone />, type: "tel", required: true },
                { name: "company", label: "Company Name", icon: <FiBriefcase />, type: "text" }
            ]
        },
        {
            title: "Project Requirements",
            description: "Tell us about your equipment needs",
            fields: [
                { name: "equipment", label: "Equipment Type", icon: <FiTruck />, type: "select", options: equipmentOptions, required: true },
                { name: "duration", label: "Rental Duration", icon: <FiCalendar />, type: "select", options: durationOptions, required: true },
                { name: "projectLocation", label: "Project Location", icon: <FiMapPin />, type: "text" },
                { name: "startDate", label: "Start Date", icon: <FiCalendar />, type: "date" }
            ]
        }
    ];

    const renderField = (field: any) => {
        const baseInputClasses = `
      w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg
      focus:ring-2 focus:ring-blue-500 focus:border-transparent
      transition-all duration-200
      bg-white
      placeholder-gray-400
    `;

        return (
            <div key={field.name} className="relative">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {field.label} {field.required && <span className="text-red-500">*</span>}
                </label>
                <div className="relative">
                    <span className="absolute left-4 top-3.5 text-gray-400">
                        {field.icon}
                    </span>
                    {field.type === 'select' ? (
                        <select
                            name={field.name}
                            value={formData[field.name as keyof FormData]}
                            onChange={handleChange}
                            className={baseInputClasses}
                            required={field.required}
                        >
                            <option value="">Select {field.label}</option>
                            {field.options?.map((option: string) => (
                                <option key={option} value={option}>{option}</option>
                            ))}
                        </select>
                    ) : (
                        <input
                            type={field.type}
                            name={field.name}
                            value={formData[field.name as keyof FormData]}
                            onChange={handleChange}
                            className={baseInputClasses}
                            required={field.required}
                            placeholder={`Enter your ${field.label.toLowerCase()}`}
                        />
                    )}
                </div>
            </div>
        );
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20"
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section with Enhanced Animation */}
                <motion.div
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-center mb-16"
                >
                    <div className="inline-block">
                        <span className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                            Get Started Today
                        </span>
                    </div>
                    <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                        Request Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Professional Quote</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Get a detailed quote for your equipment rental needs within 24 hours
                    </p>
                </motion.div>

                {/* Main Form Card */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative"
                >
                    {/* Decorative Elements */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 transform -skew-y-3 rounded-3xl shadow-2xl opacity-10" />

                    <motion.form
                        onSubmit={handleSubmit}
                        className="relative bg-white rounded-3xl shadow-xl backdrop-blur-lg backdrop-filter p-8 md:p-12 overflow-hidden"
                    >
                        {/* Background Patterns */}
                        <div className="absolute top-0 right-0 -mt-16 -mr-16 w-32 h-32 bg-purple-100 rounded-full opacity-20" />
                        <div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-48 h-48 bg-blue-100 rounded-full opacity-20" />

                        {/* Form Content */}
                        <div className="relative z-10">
                            {/* Form Sections Grid */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                                {formSections.map((section, index) => (
                                    <motion.div
                                        key={section.title}
                                        initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ duration: 0.6, delay: 0.3 + (index * 0.2) }}
                                        className="backdrop-blur-lg p-6 rounded-2xl bg-white/50 shadow-lg"
                                    >
                                        <div className="mb-8">
                                            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                                {section.title}
                                            </h3>
                                            <p className="text-gray-600 mt-2">{section.description}</p>
                                        </div>
                                        <div className="space-y-6">
                                            {section.fields.map(field => (
                                                <motion.div
                                                    key={field.name}
                                                    whileHover={{ scale: 1.02 }}
                                                    className="transition-all duration-200"
                                                >
                                                    {renderField(field)}
                                                </motion.div>
                                            ))}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Additional Fields with Enhanced Styling */}
                            <motion.div
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.6, delay: 0.8 }}
                                className="mt-12 space-y-8"
                            >
                                {/* Budget Range Field */}
                                <div className="backdrop-blur-lg p-6 rounded-2xl bg-white/50 shadow-lg">
                                    <label className="block text-lg font-semibold text-gray-700 mb-4">
                                        Budget Range
                                    </label>
                                    <div className="relative">
                                        <span className="absolute left-4 top-3.5 text-blue-500">
                                            <BiRupee size={20} />
                                        </span>
                                        <select
                                            name="budget"
                                            value={formData.budget}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 pl-12 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                                        >
                                            <option value="">Select Budget Range</option>
                                            {budgetRanges.map(option => (
                                                <option key={option} value={option}>{option}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                {/* Message Field */}
                                <div className="backdrop-blur-lg p-6 rounded-2xl bg-white/50 shadow-lg">
                                    <label className="block text-lg font-semibold text-gray-700 mb-4">
                                        Additional Requirements
                                    </label>
                                    <div className="relative">
                                        <span className="absolute left-4 top-3.5 text-blue-500">
                                            <FiMessageSquare size={20} />
                                        </span>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows={4}
                                            className="w-full px-4 py-3 pl-12 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                                            placeholder="Tell us about your specific requirements..."
                                        />
                                    </div>
                                </div>
                            </motion.div>

                            {/* Submit Button with Enhanced Animation */}
                            <motion.button
                                whileHover={{ scale: 1.02, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                disabled={isSubmitting}
                                className={`
                  w-full mt-12 py-4 px-8 rounded-xl font-bold text-white text-lg
                  ${isSubmitting
                                        ? 'bg-gray-400 cursor-not-allowed'
                                        : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'
                                    } transition-all duration-300 transform
                `}
                            >
                                {isSubmitting ? (
                                    <span className="flex items-center justify-center">
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                        </svg>
                                        Processing...
                                    </span>
                                ) : (
                                    <span className="flex items-center justify-center">
                                        Submit Quote Request
                                        <FiCheck className="ml-2" size={20} />
                                    </span>
                                )}
                            </motion.button>

                            {/* Status Messages with Enhanced Animation */}
                            <AnimatePresence>
                                {submitStatus === 'success' && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="mt-6 p-6 bg-gradient-to-r from-green-50 to-green-100 rounded-xl border border-green-200"
                                    >
                                        <p className="text-green-700 text-center font-medium flex items-center justify-center">
                                            <FiCheck className="mr-2" size={20} />
                                            Thank you! Your quote request has been submitted successfully.
                                        </p>
                                    </motion.div>
                                )}

                                {submitStatus === 'error' && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="mt-6 p-6 bg-gradient-to-r from-red-50 to-red-100 rounded-xl border border-red-200"
                                    >
                                        <p className="text-red-700 text-center font-medium">
                                            An error occurred. Please try again or contact support.
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.form>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default QuoteForm;