import "client-only";

export const clientSideFunction = () => {
    console.log(
        `Use window object,
            use localStorage`
    );
    return "client result";
    
}