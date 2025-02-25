import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

const SettingsPage = () => {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    password: "",
    address: "123 Street, Kathmandu, Nepal",
    paymentMethod: "Credit Card",
    darkMode: false
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleToggleTheme = () => {
    setUser({ ...user, darkMode: !user.darkMode });
  };

  const handleSave = () => {
    alert("Settings saved successfully!");
    // Implement API call to save settings
  };

  const handleLogout = () => {
    alert("Logged out successfully!");
    // Here you would implement your logout logic,
    // for example: clearing authentication tokens and redirecting to the login page.
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Settings</h2>
      <Card>
        <CardContent className="space-y-4 p-4">
          {/* Profile Settings */}
          <div>
            <Label>Name</Label>
            <Input type="text" name="name" value={user.name} onChange={handleChange} />
          </div>
          <div>
            <Label>Email</Label>
            <Input type="email" name="email" value={user.email} onChange={handleChange} />
          </div>
          <div>
            <Label>New Password</Label>
            <Input type="password" name="password" value={user.password} onChange={handleChange} placeholder="Enter new password" />
          </div>
          
          {/* Address Management */}
          <div>
            <Label>Address</Label>
            <Input type="text" name="address" value={user.address} onChange={handleChange} />
          </div>
          
          {/* Payment Preferences */}
          <div>
            <Label>Payment Method</Label>
            <select name="paymentMethod" value={user.paymentMethod} onChange={handleChange} className="w-full p-2 border rounded">
              <option value="Cash on Delivery">Cash on Delivery</option>
              <option value="Credit Card">Credit Card</option>
            </select>
          </div>
          
          {/* Theme Customization */}
          <div className="flex items-center justify-between">
            <Label>Dark Mode</Label>
            <Switch checked={user.darkMode} onCheckedChange={handleToggleTheme} />
          </div>
          
          <Button onClick={handleSave} className="w-full">Save Changes</Button>
          <Button onClick={handleLogout} className="w-full mt-4" variant="secondary">
            Logout
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default SettingsPage;
