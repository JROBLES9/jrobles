import type { Project } from "../types/project"
import type { Achievement } from "../types/achievement"
import type { Skill } from "../types/skill"

import projectsData from "../data/projects.json"
import achievementsData from "../data/achievements.json"
import skillsData from "../data/skills.json"

export async function getProjects(): Promise<Project[]> {
  return projectsData
}

export async function getAchievements(): Promise<Achievement[]> {
  return achievementsData
}

export async function getSkills(): Promise<Skill[]> {
  return skillsData
}

