interface BotaoProps {
    conteudo: string;
    onClick: () => void;
    className?: string;
}

const Botao = ({ conteudo, onClick, className }: BotaoProps) => {
    return (
        <button className={className} onClick={onClick}>
            {conteudo}            
        </button>
    );
};

export default Botao;
