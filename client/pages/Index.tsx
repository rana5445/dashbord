import { Search, Bell, User, BarChart3, PieChart, TrendingUp, ArrowUp, ArrowDown, Package } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-indigo-600 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Main Dashboard Container */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 min-h-[calc(100vh-2rem)]">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <div className="bg-gray-900 text-white p-2 rounded-lg">
                <BarChart3 className="w-6 h-6" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900">Business Dashboard</h1>
            </div>
            <div className="flex items-center space-x-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -y-1/2 text-gray-400 w-4 h-4" />
                <Input 
                  className="pl-10 w-64 bg-gray-50 border-gray-200" 
                  placeholder="Search..."
                />
              </div>
              <Bell className="w-6 h-6 text-gray-600 cursor-pointer" />
              <User className="w-6 h-6 text-gray-600 cursor-pointer" />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-6">
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="p-6 bg-gradient-to-br from-indigo-500 to-purple-600 text-white border-0">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-indigo-100 text-sm font-medium">CUSTOMERS</p>
                      <p className="text-3xl font-bold mt-1">$4,315</p>
                    </div>
                    <div className="bg-white/20 p-3 rounded-xl">
                      <User className="w-6 h-6" />
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-gradient-to-br from-purple-500 to-pink-500 text-white border-0">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-purple-100 text-sm font-medium">INCOME</p>
                      <p className="text-3xl font-bold mt-1">$780,632</p>
                    </div>
                    <div className="bg-white/20 p-3 rounded-xl">
                      <TrendingUp className="w-6 h-6" />
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-gradient-to-br from-indigo-400 to-blue-500 text-white border-0">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-blue-100 text-sm font-medium">PRODUCTS SOLD</p>
                      <p className="text-3xl font-bold mt-1">$490</p>
                    </div>
                    <div className="bg-white/20 p-3 rounded-xl">
                      <Package className="w-6 h-6" />
                    </div>
                  </div>
                </Card>
              </div>

              {/* Marketplace Section */}
              <Card className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Marketplace</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Data Analytics Overview */}
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Data Analytics Overview</h4>
                    <p className="text-sm text-gray-600 mb-4">Know about your usage and how you can boost it.</p>
                    
                    <div className="relative w-32 h-32 mx-auto mb-4">
                      <div className="w-32 h-32 border-8 border-gray-100 rounded-full"></div>
                      <div className="absolute inset-0 w-32 h-32 border-8 border-indigo-500 border-t-transparent rounded-full transform rotate-45"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <p className="text-xs text-gray-500">START</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Upgrade Section */}
                  <div className="text-center">
                    <div className="bg-gray-50 rounded-xl p-6 mb-4">
                      <p className="text-xs text-gray-500 mb-2">UPGRADE TO PRO</p>
                      <div className="w-16 h-16 bg-red-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
                        <div className="w-8 h-8 bg-white rounded-lg"></div>
                      </div>
                    </div>
                    <p className="text-lg font-bold text-gray-900">$29 p/m</p>
                    <p className="text-xs text-gray-500">100% Insurance for your goods</p>
                  </div>
                </div>

                {/* Finance Flow */}
                <div className="mt-8">
                  <h4 className="font-medium text-gray-900 mb-4">Finance Flow</h4>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-2xl font-bold text-gray-900">$2,530</p>
                      <p className="text-xs text-gray-500">September 2021</p>
                    </div>
                    <div className="flex-1 mx-8">
                      <div className="h-20 bg-gray-50 rounded-lg flex items-end justify-center space-x-1 p-2">
                        {[...Array(12)].map((_, i) => (
                          <div 
                            key={i} 
                            className={`w-2 bg-indigo-500 rounded-t ${
                              i % 3 === 0 ? 'h-12' : i % 2 === 0 ? 'h-8' : 'h-6'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Recent Orders */}
              <Card className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">Recent Orders</h3>
                  <Button variant="ghost" size="sm" className="text-indigo-600">SEE ALL</Button>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between py-3 border-b border-gray-100">
                    <div className="flex items-center space-x-3">
                      <span className="text-sm font-medium text-gray-900">#1233465</span>
                      <span className="text-sm text-gray-600">DJ Music Pro 2</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className="text-sm text-gray-500">Sep 16, 2021</span>
                      <span className="text-sm font-medium text-gray-900">$42.00</span>
                      <Badge variant="secondary" className="bg-green-100 text-green-700">Delivered</Badge>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between py-3">
                    <div className="flex items-center space-x-3">
                      <span className="text-sm font-medium text-gray-900">#1233468</span>
                      <span className="text-sm text-gray-600">iPad Pro 2017 Model</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className="text-sm text-gray-500">Sep 15, 2021</span>
                      <span className="text-sm font-medium text-gray-900">$932.00</span>
                      <Badge variant="secondary" className="bg-red-100 text-red-700">Canceled</Badge>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Summary Card */}
              <Card className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Summary</h3>
                
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Your Balance</p>
                    <div className="flex items-center space-x-2">
                      <p className="text-3xl font-bold text-gray-900">$10,632.00</p>
                      <div className="bg-red-500 text-white rounded-full p-1">
                        <ArrowDown className="w-3 h-3" />
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 mt-2">
                      <span className="text-sm text-gray-500">▲ $2507</span>
                      <span className="text-sm text-gray-500">▼ $1268.00</span>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Activity */}
              <Card className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">Activity</h3>
                  <Button variant="ghost" size="sm" className="text-indigo-600">SEE ALL</Button>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                      <div className="w-6 h-6 bg-indigo-500 rounded"></div>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">Withdraw Earning</p>
                      <p className="text-xs text-gray-500">12:30 AM</p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">$4,120</p>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                      <div className="w-6 h-6 bg-purple-500 rounded"></div>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">Paying Website Tax</p>
                      <p className="text-xs text-gray-500">10:30 AM</p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">$230</p>
                  </div>
                </div>
              </Card>

              {/* Top Categories */}
              <Card className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Top Categories</h3>
                <p className="text-sm text-gray-600 mb-6">Explore your top categories and keep shopping smartly.</p>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-yellow-100 rounded-xl p-4 text-center">
                    <div className="w-8 h-8 bg-yellow-400 rounded-lg mx-auto mb-2"></div>
                    <p className="text-sm font-medium text-gray-900">Footwear</p>
                    <p className="text-xs text-gray-500">14 341 sales</p>
                  </div>
                  
                  <div className="bg-green-100 rounded-xl p-4 text-center">
                    <div className="w-8 h-8 bg-green-400 rounded-lg mx-auto mb-2"></div>
                    <p className="text-sm font-medium text-gray-900">Accessories</p>
                    <p className="text-xs text-gray-500">23 761 sales</p>
                  </div>
                </div>
              </Card>

              {/* User Profile */}
              <Card className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback className="bg-green-500 text-white">SH</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-gray-900">Sally Hawkins</p>
                    <p className="text-sm text-gray-500">Manager</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
