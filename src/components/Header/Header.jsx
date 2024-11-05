import Navbar from "../Navbar/Navbar";
export default function HeaderComponent() {
    const Logo = '../public/Logo.jpg'
    return (
        <div className="container mx-auto max-w-[100px]">
            <div className="flex h-[50px] items-center justify-between">
            <div><img src={Logo} alt="Logo Principal" /></div>
            <div><Navbar /></div>
            </div>
        </div>
    );
}