const drawerState = {
    label: 'Keep'
}
export const DrawerReducer = (state = drawerState, action) => {
    switch (action.type) {
        case 'Notes':
            return { ...state, label: 'Notes' };
        case 'Remainder':
            return { ...state, label: 'Remainder' };
        case 'Edit':
            return { ...state, label: 'Edit' };
        case 'Archive':
            return { ...state, label: 'Archive' };
        case 'Bin':
            return { ...state, label: 'Bin' };
        default :
        return state;
    }
}