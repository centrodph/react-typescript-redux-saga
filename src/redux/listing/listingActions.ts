import { ActionType } from "model/model";


export const getListingAction = (payload: string) => {
	return {
	  type: ActionType.LISTING_REQUEST,
	  payload
	}
  };