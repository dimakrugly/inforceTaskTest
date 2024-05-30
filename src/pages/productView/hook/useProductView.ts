import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchComments} from "../../../store/reducer/commentSlice";
import {selectComments} from "../../../store/selectors/comments";

export const useProductData = () => {
    const dispatch = useDispatch();
    const comments = useSelector(selectComments);


    useEffect(() => {
        dispatch(fetchComments() as any);
    }, [dispatch]);

    return {comments};
}