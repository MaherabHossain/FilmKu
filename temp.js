<NavigationContainer>
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        if (route.name === "Home") {
          iconName = focused ? "dribbble-with-circle" : "dribbble-with-circle";
        } else if (route.name === "History") {
          iconName = focused ? "document" : "document";
        } else if (route.name === "Bookmark") {
          iconName = focused ? "bookmark" : "bookmark";
        }
        return <Entypo name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: "#3246a8",
      tabBarInactiveTintColor: "gray",
      tabBarLabel: () => {
        return null;
      },
      headerShown: false,
    })}
  >
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="History" component={History} />
    <Tab.Screen name="Bookmark" component={Bookmark} />
  </Tab.Navigator>
</NavigationContainer>;
//  tab navigator

<Stack.Navigator
  screenOptions={{
    headerShown: false,
  }}
>
  <Stack.Screen name="HomeScreen" component={HomeScreen} />
  <Stack.Screen name="Setting" component={Setting} />
</Stack.Navigator>;

// stack
