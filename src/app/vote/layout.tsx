import '../globals.css';
import Footer from '@/components/common/footer/Footer';
export default function VoteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className = "WrapperVote">{children}
        <div className="foot">
          <Footer />
        </div>
      </div>
    </>
  );
}
