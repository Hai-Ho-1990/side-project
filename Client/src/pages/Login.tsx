import LoginComponent from '../components/LoginComponent';

export default function Login() {
    return (
        <section
            data-scroll-section
            className="h-[100vh] w-[100vw] flex flex-col justify-center items-center"
        >
            <LoginComponent />
        </section>
    );
}
