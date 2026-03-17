import math

class CelestialBody:
    def __init__(self, name, mass, radius):
        self.name = name
        self.mass = mass
        self.radius = radius

    def calculate_density(self):
        volume = (4/3) * math.pi * (self.radius ** 3)
        return self.mass / volume if volume != 0 else 0

    def __str__(self):
        return f"{self.name} (M:{self.mass}, R:{self.radius})"