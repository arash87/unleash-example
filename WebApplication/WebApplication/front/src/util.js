export async function getFeatures(){
    try{
        const response = await fetch('unleash/features')
        return response.json()
    }catch(error){
        return {}
    }
}


