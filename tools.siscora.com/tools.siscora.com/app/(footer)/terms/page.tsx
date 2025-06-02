import Link from 'next/link';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h1 className="text-3xl font-bold text-gray-900">Terms of Service</h1>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Last updated: June 2, 2025
            </p>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
            <div className="prose max-w-none px-6 py-4">
              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">1. Acceptance of Terms</h2>
                <p className="mb-4">
                  By accessing or using our services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">2. Description of Service</h2>
                <p className="mb-4">
                  Siscora Tools provides various online tools and utilities designed to make your daily tasks easier. The services are provided "as is" and we make no warranties regarding their accuracy or reliability.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">3. User Responsibilities</h2>
                <p className="mb-2">You agree to use our services only for lawful purposes and in accordance with these Terms. You agree not to:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Use our services in any way that violates any applicable law or regulation</li>
                  <li>Engage in any conduct that restricts or inhibits anyone's use of the services</li>
                  <li>Attempt to gain unauthorized access to any portion of our services</li>
                  <li>Use any device or process to interfere with the proper working of our services</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">4. Intellectual Property</h2>
                <p className="mb-4">
                  The service and its original content, features, and functionality are and will remain the exclusive property of Siscora Tools and its licensors. Our trademarks and trade dress may not be used in connection with any product or service without our prior written consent.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">5. Limitation of Liability</h2>
                <p className="mb-4">
                  In no event shall Siscora Tools, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the services.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">6. Changes to Terms</h2>
                <p className="mb-4">
                  We reserve the right to modify these terms at any time. We will provide notice of any changes by updating the "Last Updated" date at the top of this page. Your continued use of our services after any such changes constitutes your acceptance of the new terms.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">7. Contact Us</h2>
                <p>
                  If you have any questions about these Terms, please contact us at{' '}
                  <Link href="/contact" className="text-blue-600 hover:text-blue-800">
                    our contact page
                  </Link>.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
