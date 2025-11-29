
const Copyright = () => {
    return (
        <footer className="copyright">
            <div className="copyright-container">

                <p>© {new Date().getFullYear()} MagicArts. Todos los derechos reservados.</p>
                <div className="socials"><img
                    src="/assets/Icons/logo.svg" // ← ajusta la ruta a tu logo
                    alt="Logo"
                    className="logo"
                />
                    <a
                        href="https://www.facebook.com/profile.php?id=61559937440609"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src="/assets/Icons/facebook_blue.png" // ← pon tu ícono de Facebook aquí
                            alt="Facebook"
                            className="social-icon"
                        />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Copyright;
