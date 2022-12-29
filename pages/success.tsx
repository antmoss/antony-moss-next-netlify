import Button from '../components/Button';

export default function Success() {
    return (
        <div className="container">
            <div className="flex flex-wrap items-center justify-center">
                <h1 className="w-full text-center text-3xl font-display text-secondary">Success</h1>
                <p className="text-black mt-4 text-lg w-full text-center">We&apos;ve received your message, we will respond as quickly as possible. Thank you.</p>

                <Button
                    name="Go back home"
                    url="/"
                    classes="mt-16 w-fit"
                />
            </div>
        </div>
    )
};