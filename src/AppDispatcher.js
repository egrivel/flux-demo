/**
 * Create our own dispatcher for ease of use. The whole point of this file
 * is to not have the rest of the application deal with the fact that a
 * dispatcher object must be created.
 */

import {Dispatcher} from 'flux';

const AppDispatcher = new Dispatcher();

export default AppDispatcher;
