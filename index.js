class StudyGroupFinder {
  constructor() {
    this.studyGroups = [];
  }

  createStudyGroup(course, interest) {
    const studyGroup = {
      course,
      interest,
      members: [],
    };
    this.studyGroups.push(studyGroup);
    return studyGroup;
  }

  joinStudyGroup(studyGroupId, member) {
    const studyGroup = this.studyGroups.find(group => group.id === studyGroupId);
    if (studyGroup) {
      studyGroup.members.push(member);
      return true;
    }
    return false;
  }

  findStudyGroupsByCourse(course) {
    return this.studyGroups.filter(group => group.course === course);
  }

  findStudyGroupsByInterest(interest) {
    return this.studyGroups.filter(group => group.interest === interest);
  }
}

// 示例用法
const studyGroupFinder = new StudyGroupFinder();

const group1 = studyGroupFinder.createStudyGroup('Mathematics', 'Algebra');
const group2 = studyGroupFinder.createStudyGroup('Computer Science', 'Programming');
const group3 = studyGroupFinder.createStudyGroup('Physics', 'Quantum Mechanics');

studyGroupFinder.joinStudyGroup(group1.id, 'John');
studyGroupFinder.joinStudyGroup(group1.id, 'Alice');
studyGroupFinder.joinStudyGroup(group2.id, 'Bob');
studyGroupFinder.joinStudyGroup(group3.id, 'Charlie');

const mathGroups = studyGroupFinder.findStudyGroupsByCourse('Mathematics');
console.log('Math study groups:', mathGroups);

const programmingGroups = studyGroupFinder.findStudyGroupsByInterest('Programming');
console.log('Programming study groups:', programmingGroups);
