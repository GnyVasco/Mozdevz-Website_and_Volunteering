export const Form = () => {
    return (
        <form className="flex flex-col space-y-3 w-full">
            <input type="text" placeholder="Nome" className="input w-full text-sm md:text-base py-2.5 px-3" />
            <input type="email" placeholder="Email" className="input w-full text-sm md:text-base py-2.5 px-3" />
            <input type="text" placeholder="Assunto" className="input w-full text-sm md:text-base py-2.5 px-3" />
            <textarea 
                placeholder="Mensagem" 
                className="input w-full text-sm md:text-base py-2.5 px-3 min-h-[100px]" 
                rows={4}
            />
            <button
                type="submit"
                className="py-2 md:py-3 rounded-xl bg-secondary font-mono font-bold text-sm md:text-base text-background-dark hover:bg-secondary/90 transition-colors"
            >
                ENVIAR
            </button>
        </form>
    );
};
