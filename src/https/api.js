export const getP = async () => {
    try {
        const response = await fetch('https://fakestoreapi.com/products');        
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        return data;   

    } catch (error) {
        console.error('Error:', error);
        return null;  
    }
};
