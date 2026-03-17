if __name__ == '__main__':
    students = []
    for _ in range(int(input())):
        name = input()
        score = float(input())
        students.append([name, score])

    scores = [s[1] for s in students]
    
    unique_scores = sorted(list(set(scores)))
    
    second_lowest_score = unique_scores[1]
    
    result_names = [s[0] for s in students if s[1] == second_lowest_score]
    
    result_names.sort()
    for name in result_names:
        print(name)