interface BotaoProps {
    content: string;
    onClick: () => void;
    className?: string;
}

const Botao = ({ content, onClick, className }: BotaoProps) => {
    return (
        <button className={className} onClick={onClick}>
            {content}            
        </button>
    );
};

export default Botao;
