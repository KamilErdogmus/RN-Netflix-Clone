"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var defaultScreenStyles_1 = require("../../styles/defaultScreenStyles");
var react_redux_1 = require("react-redux");
var WatchListItem_1 = require("../../components/WatchListItem");
var iconsax_react_native_1 = require("iconsax-react-native");
var colors_1 = require("../../styles/colors");
var windowWidth = react_native_1.Dimensions.get('window').width;
var itemWidth = (windowWidth - 20 * 2 - 20 * (2 - 1)) / 2;
var MovieListScreen = function () {
    var users = react_redux_1.useSelector(function (state) { return state.userList; });
    return (react_1["default"].createElement(react_native_1.SafeAreaView, { style: [defaultScreenStyles_1.defaultScreenStyle.container, styles.container] },
        react_1["default"].createElement(react_native_1.View, { style: styles.header },
            react_1["default"].createElement(react_native_1.View, { style: styles.emptyView }),
            react_1["default"].createElement(react_native_1.Image, { resizeMode: "cover", source: require('../../assets/images/netflix.png'), style: styles.headerImg }),
            react_1["default"].createElement(iconsax_react_native_1.Edit2, { size: "24", color: colors_1.themeColors.WHITE, variant: "Outline" })),
        react_1["default"].createElement(react_native_1.FlatList, { data: users, ListHeaderComponent: function () { return (react_1["default"].createElement(react_native_1.View, { style: styles.headerContainer },
                react_1["default"].createElement(react_native_1.Text, { style: styles.text }, "Who's Watching?"))); }, numColumns: 2, keyExtractor: function (item) { return item.id.toString(); }, renderItem: function (_a) {
                var item = _a.item;
                return react_1["default"].createElement(WatchListItem_1["default"], { item: item });
            }, contentContainerStyle: styles.listContainer, columnWrapperStyle: styles.columnWrapper, style: styles.flatList })));
};
exports["default"] = MovieListScreen;
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    header: {
        width: '100%',
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    emptyView: {
        width: 24
    },
    headerImg: { width: 124, height: 32 },
    flatList: {
        flex: 1,
        width: '100%'
    },
    listContainer: {
        paddingHorizontal: 20,
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    headerContainer: {
        width: '100%',
        alignItems: 'center',
        marginBottom: 20
    },
    columnWrapper: {
        justifyContent: 'flex-start',
        gap: 20,
        paddingHorizontal: 20,
        marginBottom: 20
    },
    text: {
        marginTop: 2,
        color: 'white',
        fontSize: 24
    }
});
