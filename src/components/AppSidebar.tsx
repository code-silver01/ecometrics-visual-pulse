
import { useState } from 'react';
import { 
  Sidebar, 
  SidebarContent, 
  SidebarGroup, 
  SidebarGroupContent, 
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarHeader,
  SidebarFooter
} from '@/components/ui/sidebar';
import { Badge } from '@/components/ui/badge';

interface AppSidebarProps {
  isDark: boolean;
}

const AppSidebar = ({ isDark }: AppSidebarProps) => {
  const [selectedBrand, setSelectedBrand] = useState('The Agency');

  const brands = [
    { 
      name: 'ECorp', 
      color: 'bg-emerald-500', 
      selected: false,
      metrics: { carbon: '12.3k', energy: '89%', score: 'A+' }
    },
    { 
      name: 'ICorp', 
      color: 'bg-orange-500', 
      selected: false,
      metrics: { carbon: '8.7k', energy: '76%', score: 'A' }
    },
    { 
      name: 'The Agency', 
      color: 'bg-red-500', 
      selected: true,
      metrics: { carbon: '15.2k', energy: '92%', score: 'A+' }
    }
  ];

  return (
    <Sidebar className="border-r border-border">
      <SidebarHeader className="border-b border-border p-4">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-green-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">E</span>
          </div>
          <div>
            <h2 className="font-semibold text-sm">EcoMetrics</h2>
            <p className="text-xs text-muted-foreground">Sustainability Hub</p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Brand Kits</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {brands.map((brand) => (
                <SidebarMenuItem key={brand.name}>
                  <SidebarMenuButton
                    isActive={selectedBrand === brand.name}
                    onClick={() => setSelectedBrand(brand.name)}
                    className="h-auto p-4 hover:bg-accent/50 transition-all duration-200"
                  >
                    <div className="flex items-center space-x-3 w-full">
                      {/* Brand Icon */}
                      <div className={`w-10 h-10 ${brand.color} rounded-full flex items-center justify-center shadow-lg`}>
                        <div className="w-5 h-5 bg-white rounded-full opacity-90" />
                      </div>
                      
                      {/* Brand Info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-medium text-sm truncate">{brand.name}</span>
                          {selectedBrand === brand.name && (
                            <Badge variant="secondary" className="ml-2 h-5 text-xs">
                              Active
                            </Badge>
                          )}
                        </div>
                        
                        {/* Metrics */}
                        <div className="grid grid-cols-3 gap-1 text-xs text-muted-foreground">
                          <div className="text-center">
                            <div className="font-medium text-foreground">{brand.metrics.carbon}</div>
                            <div>CO₂</div>
                          </div>
                          <div className="text-center">
                            <div className="font-medium text-foreground">{brand.metrics.energy}</div>
                            <div>Energy</div>
                          </div>
                          <div className="text-center">
                            <div className="font-medium text-emerald-600">{brand.metrics.score}</div>
                            <div>Score</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Quick Actions */}
        <SidebarGroup>
          <SidebarGroupLabel>Quick Actions</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton className="justify-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Generate Report
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton className="justify-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  View Analytics
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton className="justify-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  Export Data
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-border p-4">
        <div className="text-xs text-muted-foreground text-center">
          Last updated: {new Date().toLocaleDateString()}
        </div>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
