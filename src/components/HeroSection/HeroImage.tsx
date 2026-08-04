import avatarImage from "../../assets/profile-portrait.png";

export default function HeroImage() {
  return (
    <div className="relative">
      <div className="w-123 h-146 overflow-hidden rounded-4xl border border-accent bg-[radial-gradient(circle_at_50%_65%,#263760_0%,#0d1425_45%,#080c17_75%)]">
        <img
          className="w-123 h-151  object-cover object-top"
          src={avatarImage}
          alt="Portrait of Luka Matović"
        />
      </div>
      <div className="absolute -right-10 -bottom-6 py-2 bg-background px-1.5 text-5xl font-semibold text-accent">
        {"</>"}
      </div>
    </div>
  );
}
