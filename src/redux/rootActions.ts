import * as ListingActions from "redux/listing/listingActions";
import * as AuthenticationActions from 'redux/authentication/authenticationActions'

export const ActionCreators = Object.assign({}, {...ListingActions, ...AuthenticationActions });
