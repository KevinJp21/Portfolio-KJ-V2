import './Tools.css';

export default function Tools({ Logo, name }: { Logo: string, name: string }) {
    return (
        <div className={`cardsSkills ${name}`}>
            <img decoding="async" src={Logo} alt={name} width={'200px'} height={'200px'} loading='lazy'/>
            <div className="ContentCardsSkills">
                <span>{name}</span>
            </div>
        </div>
    );
}

