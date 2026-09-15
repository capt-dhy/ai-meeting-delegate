export type OperatingMode = "AUTO" | "ASSIST" | "REMOTE" | "TAKEOVER";

export type MeetingStatus =
  | "idle"
  | "connecting"
  | "live"
  | "paused"
  | "human_control"
  | "ending"
  | "ended"
  | "error";

export type AiState =
  | "listening"
  | "thinking"
  | "speaking"
  | "waiting"
  | "paused"
  | "human_control"
  | "reconnecting"
  | "error";

export type OperatorCommandType =
  | "approve_response"
  | "edit_response"
  | "decline_response"
  | "directive"
  | "pause"
  | "resume"
  | "takeover"
  | "release_takeover"
  | "end_meeting";

export interface MeetingStatusEvent {
  type: "meeting.status";
  version: 1;
  meetingId: string;
  status: MeetingStatus;
}

export interface AiStateEvent {
  type: "meeting.ai_state";
  version: 1;
  meetingId: string;
  state: AiState;
}

export interface OperatorCommandEvent {
  type: "meeting.operator_command";
  version: 1;
  meetingId: string;
  command: OperatorCommandType;
  payload?: Record<string, unknown>;
}
