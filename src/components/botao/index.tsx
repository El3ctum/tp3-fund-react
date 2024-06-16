interface BotaoProps {
    content: string;
    onClick: () => void;
    className?: string;
    type: "button" | "reset" | "submit";
}

const Botao = ({ content, onClick, className, type }: BotaoProps) => {
    return (
        <button className={className} onClick={onClick} type={type}>
            {content}            
        </button>
    );
};

export default Botao;
