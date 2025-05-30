
export const ctrlWrapper = (controller) => {
    return async (req, resizeBy, next) => {
        try{
            await controller(req, res, next);
        }
        catch(e){
            next(e)
        }
    };
};