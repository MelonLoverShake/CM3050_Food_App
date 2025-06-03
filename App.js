import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, Alert, SafeAreaView, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Cell, Section, TableView } from 'react-native-tableview-simple';
import { useState, useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';

const Stack = createStackNavigator();

// Custom HomeScreenCell component
const HomeScreenCell = ({ title, tagline, eta, imgUri, action, menuData, rating }) => {
  return (
    <Cell
      cellStyle="custom"
      contentContainerStyle={styles.cellContainer}
      highlightColor="#f0f0f0"
      onPress={() => action(menuData)}
    >
      <View style={styles.cellContentView}>
        <Image source={imgUri} style={styles.image} />

        {/* Rating Badge */}
        <View style={styles.ratingContainer}>
          <Ionicons name="star" size={14} color="#FFD700" />
          <Text style={styles.ratingText}>{rating}</Text>
        </View>

        {/* ETA Bubble */}
        <View style={styles.etaContainer}>
          <Ionicons name="time-outline" size={14} color="#0066cc" style={styles.etaIcon} />
          <Text style={styles.etaText}>{eta} mins</Text>
        </View>

        {/* Text Info */}
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.tagline}>{tagline}</Text>
        </View>
      </View>
    </Cell>
  );
};

// Restaurants Screen
function RestaurantsScreen({ navigation }) {
  const [restaurants, setRestaurants] = useState([]);
  
  useEffect(() => {
    // Simulating data fetch
    setRestaurants([
      {
        id: 'joes-gelato',
        title: "Joe's Gelato",
        tagline: "Dessert, Ice cream, £££",
        eta: "10-30",
        rating: "4.8",
        imgUri: require('./assets/ice_cream.jpg'),
        menu: {
          restaurant: "Joe's Gelato",
          sections: [
            {
              title: "Gelato",
              items: [
                { 
                  id: "vanilla",
                  title: "Vanilla", 
                  description: "Classic vanilla flavor made with real Madagascar vanilla beans", 
                  price: "£3.50",
                  image: require('./assets/Vanilla.jpg'),
                  inStock: true,
                  addons: [
                    { name: "Extra scoop", price: "£1.50" },
                    { name: "Waffle cone", price: "£0.75" }
                  ]
                },
                { 
                  id: "chocolate",
                  title: "Chocolate", 
                  description: "Rich Belgian chocolate flavor, creamy and indulgent", 
                  price: "£3.50",
                  image: require('./assets/chocolate_ice_cream.jpg'),
                  inStock: false,
                  addons: [
                    { name: "Extra scoop", price: "£1.50" },
                    { name: "Chocolate sauce", price: "£0.50" }
                  ]
                },
              ]
            },
            {
              title: "Toppings",
              items: [
                { 
                  id: "sprinkles",
                  title: "Sprinkles", 
                  description: "Colorful rainbow sprinkles to brighten your dessert", 
                  price: "£0.50",
                  image: require('./assets/ice_cream.jpg'),
                  inStock: true,
                  addons: []
                },
                { 
                  id: "choc_chips",
                  title: "Chocolate Chips", 
                  description: "Crispy chocolate chips made from premium dark chocolate", 
                  price: "£0.75",
                  image: require('./assets/ice_cream.jpg'),
                  inStock: false,
                  addons: []
                },
              ]
            }
          ]
        }
      },
      {
        id: 'sushi-house',
        title: "Sushi House",
        tagline: "Sushi, Japanese, £££",
        eta: "15-25",
        rating: "4.6",
        imgUri: require('./assets/sushi.jpg'),
        menu: {
          restaurant: "Sushi House",
          sections: [
            {
              title: "Sushi Rolls",
              items: [
                { 
                  id: "california",
                  title: "California Roll", 
                  description: "Crab, avocado and cucumber wrapped in nori and rice", 
                  price: "£5.50",
                  image: require('./assets/sushi.jpg'),
                  inStock: true,
                  addons: [
                    { name: "Extra wasabi", price: "£0.50" },
                    { name: "Extra ginger", price: "£0.50" }
                  ]
                },
                { 
                  id: "spicy_tuna",
                  title: "Spicy Tuna Roll", 
                  description: "Fresh tuna with spicy mayo and green onions", 
                  price: "£6.00",
                  image: require('./assets/sushi.jpg'),
                  inStock: false,
                  addons: [
                    { name: "Extra spicy", price: "£0.00" },
                    { name: "Soy sauce", price: "£0.25" }
                  ]
                },
              ]
            },
            {
              title: "Sashimi",
              items: [
                { 
                  id: "salmon",
                  title: "Salmon Sashimi", 
                  description: "Fresh Norwegian salmon, thinly sliced", 
                  price: "£7.00",
                  image: require('./assets/sushi.jpg'),
                  inStock: true,
                  addons: [
                    { name: "Extra pieces (2)", price: "£3.00" }
                  ]
                },
                { 
                  id: "tuna",
                  title: "Tuna Sashimi", 
                  description: "Premium bluefin tuna, melt-in-your-mouth texture", 
                  price: "£7.50",
                  image: require('./assets/sushi.jpg'),
                  inStock: false,
                  addons: [
                    { name: "Extra pieces (2)", price: "£3.50" }
                  ]
                },
              ]
            }
          ]
        }
      },
      {
  id: 'thai-garden',
  title: "Thai Garden",
  tagline: "Thai, Asian, Spicy, ££",
  eta: "20-35",
  rating: "4.7",
  imgUri: require('./assets/thai_food.jpg'), // You'll need to add this image
  menu: {
    restaurant: "Thai Garden",
    sections: [
      {
        title: "Curries",
        items: [
          { 
            id: "green_curry",
            title: "Green Curry", 
            description: "Authentic Thai green curry with coconut milk, Thai basil, and your choice of protein", 
            price: "£8.50",
            image: require('./assets/green_curry.jpg'),
            inStock: true,
            addons: [
              { name: "Extra spicy", price: "£0.00" },
              { name: "Chicken", price: "£2.00" },
              { name: "Prawns", price: "£3.00" }
            ]
          },
          { 
            id: "pad_thai",
            title: "Pad Thai", 
            description: "Classic Thai stir-fried noodles with tamarind, fish sauce, and crushed peanuts", 
            price: "£7.50",
            image: require('./assets/pad_thai.jpg'),
            inStock: true,
            addons: [
              { name: "Extra peanuts", price: "£0.50" },
              { name: "Chicken", price: "£2.00" },
              { name: "Prawns", price: "£3.00" }
            ]
          }
        ]
      },
      {
        title: "Appetizers",
        items: [
          { 
            id: "spring_rolls",
            title: "Fresh Spring Rolls", 
            description: "Rice paper rolls with fresh herbs, lettuce, and shrimp with peanut sauce", 
            price: "£5.50",
            image: require('./assets/spring_rolls.jpg'),
            inStock: true,
            addons: [
              { name: "Extra peanut sauce", price: "£0.75" }
            ]
          }
        ]
      }
    ]
  }
}
    ]);
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearby Restaurants</Text>
        <TouchableOpacity style={styles.filterButton}>
          <Ionicons name="filter" size={22} color="#0066cc" />
        </TouchableOpacity>
      </View>
      
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.contentContainer}>
          {restaurants.map((restaurant) => (
            <TouchableOpacity 
              key={restaurant.id}
              style={styles.restaurantCard}
              onPress={() => navigation.navigate('Menu', { menu: restaurant.menu })}
            >
              <Image source={restaurant.imgUri} style={styles.image} />
              
              {/* Rating Badge */}
              <View style={styles.ratingContainer}>
                <Ionicons name="star" size={14} color="#FFD700" />
                <Text style={styles.ratingText}>{restaurant.rating}</Text>
              </View>
              
              {/* ETA Bubble */}
              <View style={styles.etaContainer}>
                <Ionicons name="time-outline" size={14} color="#0066cc" style={styles.etaIcon} />
                <Text style={styles.etaText}>{restaurant.eta} mins</Text>
              </View>
              
              <View style={styles.textContainer}>
                <Text style={styles.title}>{restaurant.title}</Text>
                <Text style={styles.tagline}>{restaurant.tagline}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// Menu Screen
function MenuScreen({ route, navigation }) {
  const { menu } = route.params;

  useEffect(() => {
    navigation.setOptions({
      title: menu.restaurant,
      headerTitleStyle: { fontWeight: 'bold' }
    });
  }, [navigation, menu]);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Image 
        source={menu.sections[0].items[0].image} 
        style={styles.menuHeaderImage}
      />
      
      <View style={styles.menuInfoContainer}>
        <Text style={styles.menuTitle}>{menu.restaurant}</Text>
        <View style={styles.menuInfoRow}>
          <Ionicons name="location-outline" size={16} color="#666" />
          <Text style={styles.menuInfoText}>0.8 miles away</Text>
        </View>
        <View style={styles.menuInfoRow}>
          <Ionicons name="time-outline" size={16} color="#666" />
          <Text style={styles.menuInfoText}>15-25 min delivery</Text>
        </View>
      </View>
      
      {menu.sections.map((section, index) => (
        <View key={index} style={styles.menuSection}>
          <Text style={styles.menuSectionTitle}>{section.title}</Text>
          
          {section.items.map((item, itemIndex) => (
            <TouchableOpacity 
              key={itemIndex}
              style={[
                styles.menuItem,
                !item.inStock && styles.menuItemDisabled
              ]}
              onPress={() => {
                if (item.inStock) {
                  navigation.navigate('ItemDetails', { 
                    item: item,
                    restaurant: menu.restaurant
                  });
                }
              }}
              disabled={!item.inStock}
            >
              <View style={styles.menuItemContent}>
                <View style={styles.menuItemInfo}>
                  <View style={styles.menuItemTitleContainer}>
                    <Text style={[
                      styles.menuItemTitle,
                      !item.inStock && styles.menuItemTitleDisabled
                    ]}>
                      {item.title}
                    </Text>
                    
                    {!item.inStock && (
                      <View style={styles.outOfStockBadge}>
                        <Text style={styles.outOfStockText}>Out of Stock</Text>
                      </View>
                    )}
                  </View>
                  
                  <Text 
                    style={[
                      styles.menuItemDescription, 
                      !item.inStock && styles.menuItemDescriptionDisabled
                    ]} 
                    numberOfLines={2}
                  >
                    {item.description}
                  </Text>
                  
                  <Text 
                    style={[
                      styles.menuItemPrice,
                      !item.inStock && styles.menuItemPriceDisabled
                    ]}
                  >
                    {item.price}
                  </Text>
                </View>
                <Image 
                  source={item.image} 
                  style={[
                    styles.menuItemImage,
                    !item.inStock && styles.menuItemImageDisabled
                  ]} 
                />
                
                {!item.inStock && (
                  <View style={styles.imageOverlay} />
                )}
              </View>
            </TouchableOpacity>
          ))}
        </View>
      ))}
    </ScrollView>
  );
}

// Item Details Screen
function ItemDetailsScreen({ route, navigation }) {
  const { item, restaurant } = route.params;
  const [quantity, setQuantity] = useState(1);
  const [selectedAddons, setSelectedAddons] = useState([]);

  useEffect(() => {
    navigation.setOptions({
      title: item.title,
      headerTitleStyle: { fontWeight: 'bold' }
    });
  }, [navigation, item]);

  // Calculate total price
  const calculateTotal = () => {
    let basePrice = parseFloat(item.price.replace('£', ''));
    let addonTotal = 0;
    
    selectedAddons.forEach(addon => {
      addonTotal += parseFloat(addon.price.replace('£', ''));
    });
    
    return (basePrice * quantity + addonTotal).toFixed(2);
  };

  // Toggle addon selection
  const toggleAddon = (addon) => {
    if (selectedAddons.some(a => a.name === addon.name)) {
      setSelectedAddons(selectedAddons.filter(a => a.name !== addon.name));
    } else {
      setSelectedAddons([...selectedAddons, addon]);
    }
  };

  // Add to cart function
  const addToCart = () => {
    Alert.alert(
      "Added to Cart",
      `${quantity}x ${item.title} (£${calculateTotal()}) added to your cart.`,
      [{ text: "OK" }]
    );
  };

  return (
    <View style={styles.detailsContainer}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <Image source={item.image} style={styles.detailImage} />
        
        {/* Item info */}
        <View style={styles.detailsInfoContainer}>
          <Text style={styles.detailTitle}>{item.title}</Text>
          <Text style={styles.detailRestaurant}>{restaurant}</Text>
          <Text style={styles.detailDescription}>{item.description}</Text>
          <Text style={styles.detailPrice}>{item.price}</Text>
        </View>
        
        {/* Quantity selector */}
        <View style={styles.quantityContainer}>
          <Text style={styles.sectionTitle}>Quantity</Text>
          <View style={styles.quantitySelector}>
            <TouchableOpacity 
              style={[styles.quantityButton, quantity <= 1 && styles.quantityButtonDisabled]}
              onPress={() => quantity > 1 && setQuantity(quantity - 1)}
              disabled={quantity <= 1}
            >
              <Ionicons name="remove" size={20} color={quantity <= 1 ? "#ccc" : "#0066cc"} />
            </TouchableOpacity>
            <Text style={styles.quantityText}>{quantity}</Text>
            <TouchableOpacity 
              style={styles.quantityButton}
              onPress={() => setQuantity(quantity + 1)}
            >
              <Ionicons name="add" size={20} color="#0066cc" />
            </TouchableOpacity>
          </View>
        </View>
        
        {/* Addons */}
        {item.addons.length > 0 && (
          <View style={styles.addonsContainer}>
            <Text style={styles.sectionTitle}>Customize</Text>
            {item.addons.map((addon, index) => (
              <TouchableOpacity 
                key={index} 
                style={[
                  styles.addonItem,
                  selectedAddons.some(a => a.name === addon.name) && styles.addonSelected
                ]}
                onPress={() => toggleAddon(addon)}
              >
                <View style={styles.addonNameContainer}>
                  {selectedAddons.some(a => a.name === addon.name) ? (
                    <Ionicons name="checkmark-circle" size={20} color="#0066cc" style={styles.addonCheckmark} />
                  ) : (
                    <View style={styles.addonCircle} />
                  )}
                  <Text style={styles.addonName}>{addon.name}</Text>
                </View>
                <Text style={styles.addonPrice}>{addon.price}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
        
        <View style={styles.spacer} />
      </ScrollView>
      
      {/* Add to cart button - Fixed at bottom */}
      <View style={styles.totalContainer}>
        <View style={styles.totalTextContainer}>
          <Text style={styles.totalLabel}>Total:</Text>
          <Text style={styles.totalText}>£{calculateTotal()}</Text>
        </View>
        <TouchableOpacity style={styles.addToCartButton} onPress={addToCart}>
          <Ionicons name="cart-outline" size={20} color="white" style={styles.cartIcon} />
          <Text style={styles.addToCartText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// Main App
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Restaurants"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#fff',
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 1,
            borderBottomColor: '#f0f0f0',
          },
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTintColor: '#0066cc',
        }}
      >
        <Stack.Screen 
          name="Restaurants" 
          component={RestaurantsScreen} 
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Menu" component={MenuScreen} />
        <Stack.Screen name="ItemDetails" component={ItemDetailsScreen} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

// Styles
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  filterButton: {
    padding: 8,
  },
  contentContainer: {
    padding: 16,
  },
  restaurantCard: {
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: '#fff',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  image: {
    width: '100%',
    height: 180,
    resizeMode: 'cover',
  },
  ratingContainer: {
    position: 'absolute',
    top: 12,
    left: 12,
    backgroundColor: 'rgba(0,0,0,0.7)',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    color: 'white',
    fontWeight: '600',
    marginLeft: 4,
    fontSize: 12,
  },
  etaContainer: {
    position: 'absolute',
    top: 12,
    right: 12,
    backgroundColor: 'white',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    flexDirection: 'row',
    alignItems: 'center',
  },
  etaIcon: {
    marginRight: 4,
  },
  etaText: {
    fontWeight: '600',
    color: '#0066cc',
  },
  textContainer: {
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 4,
  },
  tagline: {
    color: '#666',
    fontSize: 14,
  },
  // Menu screen styles
  menuHeaderImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  menuInfoContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  menuTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  menuInfoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  menuInfoText: {
    marginLeft: 6,
    color: '#666',
  },
  menuSection: {
    paddingTop: 16,
    paddingHorizontal: 16,
  },
  menuSectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
    color: '#0066cc',
  },
  menuItem: {
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
    paddingBottom: 16,
    position: 'relative',
  },
  menuItemDisabled: {
    opacity: 0.8,
  },
  menuItemContent: {
    flexDirection: 'row',
    position: 'relative',
  },
  menuItemInfo: {
    flex: 1,
    paddingRight: 12,
  },
  menuItemTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginBottom: 4,
  },
  menuItemTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginRight: 8,
  },
  menuItemTitleDisabled: {
    color: '#999',
  },
  outOfStockBadge: {
    backgroundColor: '#ff3b30',
    paddingVertical: 2,
    paddingHorizontal: 6,
    borderRadius: 4,
  },
  outOfStockText: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
  menuItemDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 6,
  },
  menuItemDescriptionDisabled: {
    color: '#aaa',
  },
  menuItemPrice: {
    fontSize: 16,
    fontWeight: '500',
    color: '#0066cc',
  },
  menuItemPriceDisabled: {
    color: '#999',
  },
  menuItemImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  menuItemImageDisabled: {
    opacity: 0.5,
  },
  imageOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.1)',
    borderRadius: 8,
  },
  // Item details styles
  detailsContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  detailImage: {
    width: '100%',
    height: 240,
    resizeMode: 'cover',
  },
  detailsInfoContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  detailTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  detailRestaurant: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
  },
  detailDescription: {
    fontSize: 16,
    color: '#333',
    marginBottom: 12,
    lineHeight: 22,
  },
  detailPrice: {
    fontSize: 20,
    fontWeight: '600',
    color: '#0066cc',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
    color: '#333',
  },
  quantityContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  quantitySelector: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#f0f8ff',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#0066cc',
  },
  quantityButtonDisabled: {
    borderColor: '#ccc',
    backgroundColor: '#f9f9f9',
  },
  quantityText: {
    fontSize: 18,
    fontWeight: '600',
    marginHorizontal: 20,
  },
  addonsContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  addonItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 10,
    marginBottom: 8,
    backgroundColor: '#f9f9f9',
  },
  addonSelected: {
    backgroundColor: '#e6f2ff',
  },
  addonNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addonCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#0066cc',
    marginRight: 10,
  },
  addonCheckmark: {
    marginRight: 10,
  },
  addonName: {
    fontSize: 16,
  },
  addonPrice: {
    fontSize: 16,
    fontWeight: '500',
    color: '#0066cc',
  },
  spacer: {
    height: 80, // To ensure content doesn't hide behind the fixed bottom button
  },
  totalContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  totalTextContainer: {
    flexDirection: 'column',
  },
  totalLabel: {
    fontSize: 14,
    color: '#666',
  },
  totalText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  addToCartButton: {
    backgroundColor: '#0066cc',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  cartIcon: {
    marginRight: 8,
  },
  addToCartText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});