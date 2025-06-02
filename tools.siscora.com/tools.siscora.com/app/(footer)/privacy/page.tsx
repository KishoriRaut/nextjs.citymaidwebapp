import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Last updated: June 2, 2025
            </p>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
            <div className="prose max-w-none px-6 py-4">
              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">1. Information We Collect</h2>
                <p className="mb-4">
                  We collect information that you provide directly to us when you use our services, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Information you provide when you create an account</li>
                  <li>Content you submit, post, or display on our services</li>
                  <li>Communications between you and our team</li>
                  <li>Information about your use of our services</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">2. How We Use Your Information</h2>
                <p className="mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Respond to your comments, questions, and requests</li>
                  <li>Send you technical notices, updates, and support messages</li>
                  <li>Monitor and analyze trends, usage, and activities</li>
                  <li>Detect, investigate, and prevent fraudulent transactions</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">3. Information Sharing</h2>
                <p className="mb-4">
                  We do not share your personal information with third parties except as described in this Privacy Policy.
                  We may share information with:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Service providers who perform services on our behalf</li>
                  <li>Law enforcement or other government officials, in response to a verified request</li>
                  <li>Other parties in connection with a company transaction</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">4. Data Security</h2>
                <p className="mb-4">
                  We take reasonable measures to help protect information about you from loss, theft, misuse, and unauthorized access, disclosure, alteration, and destruction.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">5. Your Choices</h2>
                <p className="mb-4">
                  You may update, correct, or delete information about you at any time by logging into your account or contacting us at the information below.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">6. Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy, please contact us at{' '}
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
