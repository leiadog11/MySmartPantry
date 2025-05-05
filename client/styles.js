import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#041421',
    },
    home: {
        backgroundColor: '#041421',
        flex: 1,
    },
    title: {
        fontSize: 48,
        fontWeight: 400,
        color: '#D0D6D6',
        fontFamily: 'PlayfairDisplay',
        marginBottom: 20,
    },
    subtitle: {
        fontSize: 36,
        fontWeight: 300,
        color: '#D0D6D6',
        fontFamily: 'RobotoSlabLight',
        marginBottom: 20,
    },
    button: {
        width: 198,
        height: 57,
        borderRadius: 10,
        borderWidth: 3,
        flexShrink: 0,
        borderColor: '#042630',
        backgroundColor: '#4C7273',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 20,
        color: '#D0D6D6',
        fontFamily: 'Roboto',
        fontWeight: '700',
        letterSpacing: 2
    },
    moreInfoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5
    },
    infoBubble: {
        color: '#D0D6D680',
        opacity: 0.5
    },
    infoText: {
        fontSize: 15,
        fontFamily: 'Roboto',
        color: '#D0D6D680',
        opacity: 0.5,
        fontWeight: 400
    },
    input: {
        width: 250,
        height: 54,
        backgroundColor: '#D9D9D9',
        borderRadius: 5,
        borderWidth: 3,
        borderColor: '#000',
        marginBottom: 25
    },
    inputLabel: {
        fontSize: 15,
        width: 200,
        color: '#D0D6D680',
        opacity: 0.75,
        fontFamily: 'Roboto',
        marginRight: 20
    },
    passwordContainer: {
        position: 'relative',
    },
    eyeButton: {
        position: 'absolute',
        bottom: 40,
        right: 15
    },
    selector: {
        width: "100%",
        height: "20%",
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: "5%",
        marginBottom: "5%"
    },
    icon: {
        width: "50%",
        height: '100%',
        objectFit: "contain"
    },
    backgroundColor: {
        width: "50%",
        height: "100%",
        borderRadius: 25
    },
    profileBackground: {
        width: "20%",
        height: "100%",
        borderRadius: 20
    },
    profilePic: {
        width: "100%",
        height: "100%"
    },
    topBar: {
        backgroundColor: "#060D13",
        width: "100%",
        height: "11%",
        display: "flex",
        flexDirection: "row",
        paddingTop: "10%",
        paddingBottom: "5%",
        paddingLeft: "5%",
        paddingRight: "5%",
        alignItems: "center",
        justifyContent: "flex-end",
        gap: "5%"
    },
    topBarText: {
        color: "#D0D6D6",
        fontSize: 25,
        fontFamily: 'RobotoSlabLight',
    },
    topBarMenu: {
        marginRight: "40%"
    },
    sideBar: {
        height: "100%",
        backgroundColor: "#060D13",
        display: "flex",
        position: "absolute",
        top: "11%"
    },
    sideBarOpen: {
        width: "30%",
    },
    sideBarClosed: {
        width: "0%",
    },
    sideBarButton: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "12%"
    },
    sideBarButtonSelected: {
        backgroundColor: "#86B9B0"
    },
    settingsButton: {
        alignItems: "center",
        marginTop: "75%"
    },
    homePages: {
        width: "100%",
        marginBottom: "10%",
        padding: "3%",
        justifyContent: "center",
        alignItems: "center",
    },
    pageTitle: {
        width: "95%",
        padding: "4%",
        marginBottom: "4%",
        backgroundColor: "#4C7273",
        borderColor: "#042630",
        borderWidth: 5,
        borderRadius: 15,
        color: "#D0D6D6",
        fontFamily: "Roboto",
        fontWeight: 700,
        textAlign: "center",
        fontSize: 25,
        letterSpacing: 2
    },
    pantrySelector: {
        width: "95%",
        padding: "4%",
        marginBottom: "4%",
        backgroundColor: "#4C7273",
        borderColor: "#042630",
        borderWidth: 5,
        borderRadius: 15
    },
    pantrySelectorText: {
        fontFamily: 'RobotoBold',
        color: "#D0D6D6",
        textAlign: "center",
        fontSize: 25,
        letterSpacing: 2
    },
    pantrySettings: {
        width: "95%",
        display: "flex",
        flexDirection: "row",
        gap: "2%"
    },
    pantrySearch: {
        width: "49%",
        height: "80%",
        padding: "1%",
        backgroundColor: "#4C7273",
        borderColor: "#042630",
        borderWidth: 5,
        borderRadius: 15
    },
    pantryFilter: {
        width: "49%",
        padding: "4%",
        marginBottom: "4%",
        backgroundColor: "#4C7273",
        borderColor: "#042630",
        borderWidth: 5,
        borderRadius: 15
    },
    filterSelectorText: {
        fontFamily: 'RobotoBold',
        color: "#D0D6D6",
        fontSize: 15,
        letterSpacing: 1
    },
    pantryItems: {
        width: "95%",
        height: "52%",
        marginBottom: "65%",
        display: "flex",
        flex: "row",
        gap: "5%"
    },
    pantryAdd: {
        width: "33%",
        height: "23%",
        padding: "2%",
        diplay: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#D0D6D6",
        borderColor: "#042630",
        borderWidth: 2,
        borderRadius: 15,
    },
    addIcon: {
        backgroundColor: "#4C7273",
        borderColor: "black",
        borderWidth: 2,
        borderRadius: 25
    },
    addText: {
        fontFamily: "Roboto",
        fontWeight: 700,
        marginTop: "10%"
    },
    shoppingListSettings: {
        width: "95%",
        display: "flex",
        flexDirection: "row"
    },
    shoppingListSettingButton: {
        width: "49%",
        padding: "2%",
        marginBottom: "4%",
        backgroundColor: "#4C7273",
        borderColor: "#042630",
        borderWidth: 5,
        borderRadius: 15
    },
    shoppingListSettingText: {
        color: "#D0D6D6",
        fontFamily: "Roboto",
        fontSize: 12,
        fontWeight: 700,
        letterSpacing: 1
    },
    shoppingListItems: {
        width: "95%",
        height: "60%",
        marginBottom: "40%",
        display: "flex",
        gap: "5%",
    },
    shoppingListAdd: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#D0D6D6",
        borderColor: "#042630",
        borderWidth: 2,
        borderRadius: 20,
        padding: "2%"
    },
    addText2: {
        fontFamily: "Roboto",
        fontWeight: 700,
        marginLeft: "5%"
    },
    recipeBook: {
        width: "95%",
        height: "80%",
        padding: "2%",
        backgroundColor: "#D0D6D6",
        borderColor: "#042630",
        borderWidth: 5,
        borderRadius: 15
    },
    recipeName: {
        position: "relative",
        display: "flex",
        flexDirection: "row",
        width: "100%",
        height: "15%",
        padding: "2%",
        borderColor: "black",
        borderWidth: 4,
        borderRadius: 10,
        marginBottom: "2%"
    },
    recipeImage: {
        position: "relative",
        marginLeft: "5%",
        width: "20%",
        height: "100%"
    },
    recipeText: {
        marginLeft: "5%",
    },
    recipeTitle: {
        fontFamily: "Roboto",
        fontWeight: 700,
        fontSize: 17
    },
    recipeDescription: {
        fontFamily: "Roboto",
        fontWeight: 400,
        fontStyle: "italic",
        fontSize: 12
    },
    recipeInstructions: {
        position: "relative",
        display: "flex",
        width: "100%",
        height: "30%",
        padding: "2%",
        borderColor: "black",
        borderWidth: 4,
        borderRadius: 10,
        marginBottom: "2%"
    },
    instructionsTitle: {
        fontFamily: "Roboto",
        fontWeight: 700,
        textAlign: "center",
        fontSize: 17
    },
    bulletItem: {
        flexDirection: 'row',
        marginTop: 10,
        marginLeft: 10
    },
    bullet: {
        marginRight: 8,
        fontSize: 18,
        lineHeight: 24,
    },
    itemText: {
        flex: 1,
        fontSize: 16,
        lineHeight: 24,
    },
    ingredients: {
        position: "relative",
        display: "flex",
        width: "100%",
        height: "45%",
        padding: "2%",
        borderColor: "black",
        borderWidth: 4,
        borderRadius: 10,
        marginBottom: "2%"
    },
    ingredientButtons: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "25%",
        marginTop: "10%"
    },
    recipeAdd: {
        width: "40%",
        height: "100%",
        padding: "2%",
        diplay: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#D0D6D6",
        borderColor: "#042630",
        borderWidth: 2,
        borderRadius: 15,
        marginRight: "2%"
    },
    ingredientRemove: {
        backgroundColor: "#4C7273",
        borderColor: "#042630",
        borderWidth: 2,
        borderRadius: 15,
        width: "55%",
        height: "100%",
        padding: "2%",
        justifyContent: "center"
    },
    ingredientRemoveText: {
        textAlign: "center",
        color: "#D0D6D6",
        fontFamily: "Roboto",
        fontWeight: 700,
        letterSpacing: 1
    }
});
