const Terms = () => {
  return (
    <div className="w-full h-full flex-col bg-gray-50 px-4">
    <h1 className="text-3xl font-bold text-center text-gray-800 mt-8">Terms of Service</h1>
     <p className="text-gray-600 mb-6 text-center mt-4">
      Welcome to MXM DEV! By using our website and services, you agree to the following terms and conditions. Please read them carefully.
    </p>
    <div className="bg-gray-200 text-align-left w-full shadow-md rounded-lg p-10">   
    
       
    
      <h2 className="text-lg font-semibold text-gray-800 ">1. Acceptance of Terms</h2>
      <p className="text-gray-600 mb-4">
        By accessing or using our website, you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree, please do not use our services.
      </p> 
        <h2 className="text-lg font-semibold text-gray-800">2. Use of Services</h2>        
        <p className="text-gray-600 mb-4">
            You agree to use our services only for lawful purposes and in accordance with these Terms. You are responsible for any content you post or share through our platform.
        </p>
        <h2 className="text-lg font-semibold text-gray-800 ">3. Intellectual Property</h2>
        <p className="text-gray-600 mb-4">
            All content on our website, including text, graphics, logos, and software, is the property of MXM DEV or its licensors and is protected by intellectual property laws. You may not use, reproduce, or distribute any content without our prior written permission.
        </p>
        <h2 className="text-lg font-semibold text-gray-800">4. Limitation of Liability</h2>    
        <p className="text-gray-600 mb-4">
            We do not guarantee that our services will be uninterrupted or error-free. In no event shall MXM DEV be liable for any damages arising out of or in connection with the use of our services.
        </p>
        <h2 className="text-lg font-semibold text-gray-800 ">5. Changes to Terms</h2>
        <p className="text-gray-600 mb-4">
            We reserve the right to modify these Terms of Service at any time. Any changes will be effective immediately upon posting on our website. Your continued use of our services after any changes constitutes your acceptance of the new Terms.    
        </p>
        <h2 className="text-lg font-semibold text-gray-800">6. Contact Us</h2>
        <p className="text-gray-600 mb-4">
            If you have any questions about these Terms of Service,  <a href="/contact"
                className="text-blue-500 hover:underline">please contact us</a></p>
    </div>
    </div>
  );
}
  
  export default Terms;