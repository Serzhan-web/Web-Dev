from Planet import Planet
from Star import Star

def main():
    sun = Star("Sun", 1.989e30, 696340, 5778)
    earth = Planet("Earth", 5.972e24, 6371, True)
    
    bodies = [sun, earth]

    for body in bodies:
        print(body)
        print("Density:", body.calculate_density())

    print(earth.get_info()) 
    print(earth.get_info("Nitrogen-Oxygen"))
    
    print("Spectral Class of Sun:", sun.get_spectral_class())

if __name__ == "__main__":
    main()